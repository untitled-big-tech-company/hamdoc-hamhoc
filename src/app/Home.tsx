import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BookTextIcon, Moon, MoveRightIcon, Sun } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
function Home() {
  const [inputText, setInputText] = useState<string>("");
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
        </div>
      </main>
    </>
  );
}

export default Home;
