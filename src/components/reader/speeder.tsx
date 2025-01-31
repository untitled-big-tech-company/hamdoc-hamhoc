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
import { SAMPLE_TEXT } from "@/registry/sample-text";
import {
  ArrowLeftIcon,
  GaugeIcon,
  PauseIcon,
  PlayIcon,
  RotateCcwIcon,
  WholeWordIcon,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import Dot from "../animata/background/dot";
import AnimatedBorderTrail from "../animata/container/animated-border-trail";
import { Button } from "../ui/button";
import { ProgressWithValue } from "../ui/progress";
const speedOptions = [100, 200, 300, 400, 500, 600];
const wordGroups = [1, 2, 3, 4];
const Speeder = ({ input }: { input: string }) => {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(400); // Words per minute
  const [wordGroup, setWordGroup] = useState<number>(1);
  const wordIndex = useRef<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const reset = () => {
    setIsPlaying(true);
    wordIndex.current = 0;
    setCurrentWord("");
  };
  const tokens = useMemo<string[]>(() => {
    const text = input.length === 0 ? SAMPLE_TEXT : input;
    const segmenter = new Intl.Segmenter("vi", { granularity: "word" });
    const tokens = [...segmenter.segment(text)]
      .filter(s => s.isWordLike)
      .map(s => s.segment);
    if (wordGroup === 1) {
      return tokens;
    }
    return [...Array(Math.ceil(tokens.length / wordGroup))]
      .map(_ => tokens.splice(0, wordGroup))
      .flatMap(item => item.join(" "));
  }, [input, wordGroup]);

  useEffect(() => {
    if (isPlaying) {
      const speedMs = 60000 / speed; // Convert WPM to ms per word

      intervalRef.current = setInterval(() => {
        if (wordIndex.current >= tokens.length) {
          reset();
          return;
        }

        setCurrentWord(tokens[wordIndex.current]);
        setProgress(Math.ceil((wordIndex.current / tokens.length) * 100));
        wordIndex.current++;
      }, speedMs);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, speed, tokens]);
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        setIsPlaying(!isPlaying);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isPlaying]);

  return (
    <Dot
      className="relative isolate min-h-screen"
      // color="rgba(235, 231, 231, 0,7)"
      size={1.5}
      spacing={20}
    >
      <div className="container mx-auto lg:pt-20 pt-6 px-6">
        <div>
          <ProgressWithValue position="none" value={progress} />
          <div className="mt-4 lg:text-6xl text-4xl font-bold text-center rounded-lg lg:p-16 p-8 bg-slate-50 text-slate-800 will-change-[opacity] backface-hidden">
            {currentWord}
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
                  <Button variant="secondary" size="icon">
                    <PauseIcon />
                  </Button>
                </>
              )}
              {!isPlaying && (
                <>
                  <span className="text-blue-500">Spacebar để tiếp tục</span>
                  <Button variant="secondary" size="icon">
                    <PlayIcon />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Dot>
  );
};

export default Speeder;
