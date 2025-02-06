import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpenCheckIcon,
  BookTextIcon,
  FileIcon,
  FileTextIcon,
  Moon,
  MoveRightIcon,
  Paperclip,
  Sun,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
const FileSvgDraw = () => {
  return (
    <>
      <svg
        className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Click to upload</span>
        &nbsp; or drag and drop
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">DOCX</p>
    </>
  );
};
function Home() {
  const [inputText, setInputText] = useState<string>("");
  const [files, setFiles] = useState<File[] | null>(null);
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-end p-6 lg:px-8"
        >
          <Button variant="outline" size="icon" onClick={() => toggleTheme()}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </header>
      <main className="min-h-screen h-screen">
        <div className="relative h-full isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
          <div className="mx-auto max-w-2xl py-16 lg:py-48 px-6">
            <div className="text-center">
              <div className="bg-red-50 border-red-300 border-3 text-red-500 size-24 rounded-full inline-flex items-center justify-center">
                <BookTextIcon className="size-12" />
              </div>
              <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
                Ham Đọc Ham Học
              </h1>
              <p className="mt-4 md:mt-8 text-pretty text-lg font-medium sm:text-xl/8">
                Tăng tốc độ đọc của bạn gấp 4 lần chỉ bằng một thao tác đơn giản
              </p>
              <div className="mt-4 lg:mt-10 lg:mx-20 flex items-center justify-center gap-x-6">
                <Tabs defaultValue="input" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="input">
                      <BookOpenCheckIcon className="mr-2" />
                      Input
                    </TabsTrigger>
                    <TabsTrigger value="file">
                      <FileTextIcon className="mr-2" />
                      File
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="input">
                    <div className="flex flex-col w-full items-center justify-center gap-x-6 gap-y-4">
                      <Textarea
                        placeholder="Dán Văn Bản Bạn Cần Đọc Nhanh Vào Đây"
                        className="w-full"
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                      />
                      <div className="grid grid-cols-2 w-full gap-x-4">
                        <Button
                          disabled={inputText.length === 0}
                          onClick={() =>
                            navigate("/read/input", {
                              state: { input: inputText },
                            })
                          }
                        >
                          Bắt đầu
                        </Button>
                        <Button variant="ghost" asChild>
                          <Link to="/read/lang-le-sa-pa">
                            Trải Nghiệm <MoveRightIcon />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="file">
                    <div className="flex flex-col w-full items-center justify-center gap-x-6 gap-y-4">
                      <FileUploader
                        value={files}
                        onValueChange={setFiles}
                        dropzoneOptions={{
                          maxFiles: 1,
                          maxSize: 1024 * 1024 * 4,
                          multiple: false,
                          accept: {
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                              [".docx"],
                          },
                        }}
                        className="relative bg-background rounded-lg p-2"
                      >
                        <FileInput className="outline-dashed outline-1 outline-white">
                          <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
                            <FileSvgDraw />
                          </div>
                        </FileInput>
                        <FileUploaderContent>
                          {files &&
                            files.length > 0 &&
                            files.map((file, i) => (
                              <FileUploaderItem key={i} index={i}>
                                <Paperclip className="h-4 w-4 stroke-current" />
                                <span>{file.name}</span>
                              </FileUploaderItem>
                            ))}
                        </FileUploaderContent>
                      </FileUploader>
                      <Button
                        disabled={!files || files?.length === 0}
                        className="w-full"
                        onClick={() =>
                          navigate("/read/file", {
                            state: { file: files?.[0] },
                          })
                        }
                      >
                        <FileIcon />
                        Đọc tập tin
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
