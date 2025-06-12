import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    []
  );
  const navigate = useNavigate();

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
    <section className="min-h-screen flex items-center justify-center py-20 lg:py-40 pt-16">
      <div className="container mx-auto flex flex-col items-center gap-8 max-w-2xl">
        <div className="flex gap-4 flex-col items-center w-full">
          <h1 className="text-5xl md:text-7xl tracking-tighter text-center font-regular w-full">
            <span className="text-spektr-cyan-50">This is something</span>
            <span className="relative flex justify-center overflow-hidden text-center md:pb-4 md:pt-1 w-full">
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
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center w-full">
            Agentic AI Apps Built for Humans, Not to Replace Them
          </p>
        </div>
        <div className="flex flex-row gap-3 justify-center w-full">
          <Button size="lg" className="gap-4" variant="outline">
            Jump on a call <PhoneCall className="w-4 h-4" />
          </Button>
          <Button size="lg" className="gap-4" onClick={() => navigate('/start')}>
            Get Started <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export { Hero }; 