import Speeder from "@/components/reader/speeder";
import { Button } from "@/components/ui/button";
import { LoaderCircleIcon } from "lucide-react";
import mammoth from "mammoth";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
function fileToArrayBuffer(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      // Check if result is ArrayBuffer
      if (reader.result instanceof ArrayBuffer) {
        resolve(reader.result);
      } else {
        reject(new Error("FileReader did not return an ArrayBuffer"));
      }
    };

    reader.onerror = () => {
      reject(reader.error);
    };

    reader.readAsArrayBuffer(file);
  });
}

export default function File() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [processedInput, setProcessedInput] = useState<string>("");
  const file = location?.state?.file;
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function processFile() {
      if (!file) return;

      try {
        const arrayBuffer = await fileToArrayBuffer(file);
        const { value } = await mammoth.extractRawText({ arrayBuffer });
        if (!value || value.trim() === "") {
          throw new Error(
            "Tập tin rỗng hoặc không lấy được dữ liệu trong tập tin này."
          );
        }
        setProcessedInput(value);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to process file"
        );
      } finally {
        setIsLoading(false);
      }
    }

    processFile();
  }, [file]);

  if (!file) {
    return (
      <Button asChild>
        <Link to="/">Về Trang Chủ</Link>
      </Button>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircleIcon className="size-8 animate-spin" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="container max-w-2xl mx-auto mt-10 md:mt-36">
        <div className="text-center space-y-8 p-8 border border-red-200 bg-red-50/20 shadow-lg rounded-lg">
          <p className="text-red-700 font-bold">{error}</p>
          <Button asChild>
            <Link to="/">Về Trang Chủ</Link>
          </Button>
        </div>
      </div>
    );
  }
  return <Speeder input={processedInput} />;
}
