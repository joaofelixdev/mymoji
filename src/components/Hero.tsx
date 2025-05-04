import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function Hero() {
    return (
        <section
            id="hero"
            className="w-full h-[600px] relative flex items-center justify-center"
        >
            <div className="w-[1280px] flex gap-4">
                <div className="w-1/2">

                    <div className="z-10 flex items-center">
                        <div
                            className={cn(
                                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                            )}
                        >
                            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                <span>✨ Crie seu mymoji e divirta-se</span>
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </AnimatedShinyText>
                        </div>
                    </div>

                    <h1 className="text-6xl bg-white z-999 font-poppins mt-6">Transforme seu rosto em diversão!</h1>
                    <p className="text-[1rem] text-gray-500 mt-4">
                        Envie sua foto e receba um memoji incrível, feito sob medida para você.
                    </p>
                    <p className="text-[1rem] text-gray-500">
                        Rápido, fácil e super divertido — seu novo avatar espera por você!
                    </p>

                    <div className="mt-6 flex items-center gap-4">
                        <Button
                            className="relative overflow-hidden rounded-full cursor-pointer"
                            size="lg"
                            variant="outline"
                        >
                            Criar meu Mymoji

                            <BorderBeam
                                size={90}
                                initialOffset={20}
                                className="from-transparent via-yellow-500 to-transparent"
                                transition={{
                                    type: "spring",
                                    stiffness: 60,
                                    damping: 20,
                                }}
                            />
                        </Button>
                        <Button className="relative overflow-hidden rounded-full cursor-pointer" size="sm" variant="outline">
                            <Video />
                            Como funciona?
                        </Button>
                    </div>
                </div>

                <div className="w-1/2">
                    <NeonGradientCard borderRadius={8}>
                        <BeforeAfterSlider
                            beforeImage="/images/mymoji-before.jpg"
                            afterImage="/images/mymoji-after.jpg"
                        />
                    </NeonGradientCard>
                </div>
            </div>
        </section>
    );
}