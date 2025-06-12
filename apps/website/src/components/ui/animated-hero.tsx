import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 lg:py-40">
      <div className="container mx-auto max-w-2xl flex flex-col items-center gap-8">
        <Button variant="secondary" size="sm" className="gap-4">
          Read our launch article <MoveRight className="w-4 h-4" />
        </Button>
        <div className="flex gap-4 flex-col items-center">
          <h1 className="text-5xl md:text-7xl tracking-tighter text-center font-regular">
            <span className="text-spektr-cyan-50">This is something</span>
            <span className="relative flex justify-center overflow-hidden text-center md:pb-4 md:pt-1">
              &nbsp;
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-semibold"
                  initial={{ opacity: 0, y: "-100" }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? {
                          y: 0,
                          opacity: 1,
                        }
                      : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">
            Managing a small business today is already tough. Avoid further
            complications by ditching outdated, tedious trade methods. Our
            goal is to streamline SMB trade, making it easier and faster than
            ever.
          </p>
        </div>
        <div className="flex flex-row gap-3 justify-center">
          <Button size="lg" className="gap-4" variant="outline">
            Jump on a call <PhoneCall className="w-4 h-4" />
          </Button>
          <Button size="lg" className="gap-4">
            Sign up here <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export { Hero }; 