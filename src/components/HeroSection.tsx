import { Play, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDrifting from "@/assets/hero-drifting.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroDrifting} 
          alt="Drifting car on Namibian roads" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo/Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-3 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-glow">
            <div className="w-6 h-6 bg-gradient-hero rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">Welcome to</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
          The Pitlane Plug
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-foreground mb-4 font-medium">
          Namibia's Motorsport Chaos
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Welcome to the wildest motorsport podcast from the heart of Namibia. 
          Dive into the chaos of drifting, karting, F1 madness, and everything that makes our engines roar.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-hero hover:shadow-button transition-all duration-300 font-semibold px-8 py-6 text-lg"
          >
            <Play className="mr-2 h-5 w-5" />
            Listen Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold"
          >
            <Headphones className="mr-2 h-5 w-5" />
            Latest Episode
          </Button>
        </div>

        {/* Latest Episode Teaser */}
        <div className="mt-12 bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-card max-w-2xl mx-auto">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-accent">Latest Episode</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Episode 15: Drift Kings of the Desert
          </h3>
          <p className="text-muted-foreground text-sm">
            Justice breaks down the latest from Namibia's underground drifting scene and why 
            these desert roads are perfect for chaos.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;