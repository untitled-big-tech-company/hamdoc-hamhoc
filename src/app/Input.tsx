import Speeder from "@/components/reader/speeder";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router";

export default function Input() {
  const location = useLocation();
  const input = location?.state?.input;
  if (!input) {
    return (
      <Button asChild>
        <Link to="/">Về Trang Chủ</Link>
      </Button>
    );
  }
  return <Speeder input={input} />;
}
