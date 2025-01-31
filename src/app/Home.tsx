import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BookTextIcon, MoveRightIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
function Home() {
  const [inputText, setInputText] = useState<string>("");
  const navigate = useNavigate();
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          </nav>
      </header>
      <main>
        <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-56 px-6">
          <div className="text-center">
            <div className="bg-red-100/50 text-red-500 size-24 rounded-full inline-flex items-center justify-center">
              <BookTextIcon className="size-12" />
            </div>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Ham Đọc Ham Học
            </h1>
            <p className="mt-4 md:mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Tăng tốc độ đọc của bạn gấp 4 lần chỉ bằng một thao tác đơn giản
            </p>
            <div className="mt-4 lg:mt-10 lg:mx-20 flex items-center justify-center gap-x-6">
              <div className="flex flex-col w-full items-center justify-center gap-x-6 gap-y-4">
                <Textarea
                  placeholder="Dán Văn Bản Bạn Cần Đọc Nhanh Vào Đây"
                  className="w-full"
                  rows={6}
                  value={inputText}
                  onChange={e => setInputText(e.target.value)}
                />
                <div className="grid grid-cols-2 w-full gap-x-4">
                  <Button
                    disabled={inputText.length === 0}
                    onClick={() =>
                      navigate("/read/input", { state: { input: inputText } })
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
