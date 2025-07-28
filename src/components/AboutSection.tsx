import { Mic, Zap, Trophy, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About the <span className="bg-gradient-hero bg-clip-text text-transparent">Show</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet Justice M. Shikongo - the voice behind Namibia's most chaotic motorsport podcast
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Host Photo & Bio */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                    <Mic className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Justice M. Shikongo</h3>
                    <p className="text-primary font-medium">Host & Motorsport Enthusiast</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  From the dusty tracks of Windhoek to the roaring engines of international circuits, 
                  I've been living and breathing motorsport since I could walk. What started as a 
                  childhood fascination with go-karts has evolved into a full-blown obsession with 
                  everything that has wheels and goes fast.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  I treat life like an F1 World Championship - every day is a new race, every challenge 
                  is a corner to master, and every setback is just another opportunity to come back stronger. 
                  The Pitlane Plug is my way of sharing this passion with fellow speed demons across Namibia and beyond.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission & Values */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8 text-foreground">Why The Pitlane Plug Exists</h3>
            
            <div className="space-y-6">
              <Card className="bg-card border-border hover:shadow-button transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Passion First</h4>
                      <p className="text-muted-foreground">
                        Motorsport isn't just a hobby - it's a way of life. Every episode is fueled by 
                        genuine love for the chaos, the speed, and the community.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-button transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Motorsport Chaos Explained</h4>
                      <p className="text-muted-foreground">
                        For the uninitiated: imagine chess, but the pieces are 1000kg missiles going 200km/h, 
                        and every move could end in spectacular flames or victory.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-button transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">F1 WDC Mindset</h4>
                      <p className="text-muted-foreground">
                        Every challenge in life gets the Formula 1 treatment: strategic thinking, 
                        split-second decisions, and always pushing for that extra tenth of a second.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;