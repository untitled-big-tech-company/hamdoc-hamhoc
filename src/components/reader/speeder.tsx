import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeftIcon,
  GaugeIcon,
  MoonIcon,
  PauseIcon,
  PlayIcon,
  RotateCcwIcon,
  SunIcon,
  WholeWordIcon,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import AnimatedBorderTrail from "../animata/container/animated-border-trail";
import { useTheme } from "../theme-provider";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
const tokenize = (text: string) => {
  return text.match(/[\p{Letter}\p{Mark}'-.,!?;:%—()"']+/gu) || [];
};
const speedOptions = [100, 200, 300, 400, 500, 600];
const wordGroups = [1, 2, 3, 4];
const Speeder = ({ input }: { input: string }) => {
  const [currentWord, setCurrentWord] = useState<string>("0");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(400); // Words per minute
  const [wordGroup, setWordGroup] = useState<number>(1);
  const wordIndex = useRef<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [countdown, setCountdown] = useState<number>(3);
  const [isCountingDown, setIsCountingDown] = useState(true);

  const reset = () => {
    setIsPlaying(false);
    setIsCountingDown(true);
    setCountdown(3);
    wordIndex.current = 0;
    setCurrentWord("0");
  };
  const tokens = useMemo<string[]>(() => {
    const tokens = tokenize(input)
      .map(word => word.trim())
      .filter(token => {
        return /[\p{Letter}\p{Mark}]/u.test(token);
      });
    if (wordGroup === 1) {
      return tokens;
    }
    return [...Array(Math.ceil(tokens.length / wordGroup))]
      .map(_ => tokens.splice(0, wordGroup))
      .flatMap(item => item.join(" "));
  }, [input, wordGroup]);

  useEffect(() => {
    if (isCountingDown && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (isCountingDown && countdown === 0) {
      setIsCountingDown(false);
      setIsPlaying(true);
    }
  }, [countdown, isCountingDown]);

  useEffect(() => {
    if (isPlaying && !isCountingDown) {
      const speedMs = 60000 / speed;

      const updateWord = () => {
        if (wordIndex.current >= tokens.length) {
          reset();
          return;
        }
        setCurrentWord(tokens[wordIndex.current]);
        setProgress(Math.ceil((wordIndex.current / tokens.length) * 100));
        wordIndex.current++;
      };

      intervalRef.current = setInterval(updateWord, speedMs);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, speed, tokens, isCountingDown]);
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        setIsPlaying(!isPlaying);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isPlaying]);
  const { toggleTheme } = useTheme();
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-end p-6 lg:px-8"
        >
          <Button variant="outline" size="icon" onClick={() => toggleTheme()}>
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </header>
      <div className="container mx-auto lg:pt-20 pt-6 px-6">
        <div>
          <Progress value={progress} />
          <div className="mt-4 lg:text-6xl text-4xl font-bold text-center rounded-lg lg:p-16 p-8 bg-foreground/5 will-change-[opacity] backface-hidden">
            <span className="min-h-8">{isCountingDown ? countdown : currentWord}</span>
          </div>
        </div>

        <div className="lg:mt-10 mt-4 flex flex-col-reverse gap-y-4 lg:flex-row items-center lg:items-start lg:justify-between align-top">
          <AnimatedBorderTrail>
            <Card className="lg:max-w-md w-full">
              <CardHeader>
                <CardTitle>Tuỳ Chỉnh</CardTitle>
                <CardDescription>
                  Tùy chỉnh các thông số để tối ưu tốc độ đọc của bạn
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold inline-flex gap-x-2">
                      <GaugeIcon /> Tốc độ đọc
                    </p>
                    <Select
                      value={String(speed)}
                      onValueChange={value => setSpeed(Number(value))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Tốc độ đọc" />
                      </SelectTrigger>
                      <SelectContent>
                        {speedOptions.map(speedOption => (
                          <SelectItem
                            key={speedOption}
                            value={String(speedOption)}
                          >{`${speedOption} từ / phút`}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <p className="font-bold inline-flex gap-x-2">
                      <WholeWordIcon /> Nhóm chữ
                    </p>
                    <Select
                      value={String(wordGroup)}
                      onValueChange={value => setWordGroup(Number(value))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Tốc độ đọc" />
                      </SelectTrigger>
                      <SelectContent>
                        {wordGroups.map(option => (
                          <SelectItem
                            key={option}
                            value={String(option)}
                          >{`${option} từ / lần`}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full justify-between gap-x-4">
                  <Button variant="secondary" asChild>
                    <Link to="/">
                      <ArrowLeftIcon /> Về trang chủ
                    </Link>
                  </Button>
                  <Button onClick={reset}>
                    <RotateCcwIcon /> Đọc lại
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </AnimatedBorderTrail>
          <div className="lg:-mt-8">
            <div className="flex justify-end gap-x-2 text-sx items-center">
              {isPlaying && (
                <>
                  <span className="text-gray-500">Spacebar để ngừng</span>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => setIsPlaying(false)}
                  >
                    <PauseIcon />
                  </Button>
                </>
              )}
              {!isPlaying && (
                <>
                  <span className="text-blue-500">Spacebar để tiếp tục</span>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => setIsPlaying(true)}
                  >
                    <PlayIcon />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speeder;
