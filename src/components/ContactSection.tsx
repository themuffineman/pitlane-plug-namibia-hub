import { useState } from "react";
import { Send, Mail, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's <span className="bg-gradient-hero bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Got a story? Want to collaborate? Looking to sponsor? Drop me a line and let's talk motorsport chaos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <Send className="mr-3 h-6 w-6 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-primary transition-smooth"
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject (Optional)"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-background border-border focus:border-primary transition-smooth"
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message *"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-background border-border focus:border-primary transition-smooth resize-none"
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-hero hover:shadow-button transition-all duration-300 font-semibold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="bg-card border-border hover:shadow-button transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Direct Email</h3>
                    <p className="text-muted-foreground mb-2">
                      For collaborations, guest bookings, or sponsorship inquiries
                    </p>
                    <a 
                      href="mailto:thepitlaneplug@gmail.com"
                      className="text-primary hover:text-accent transition-smooth font-medium"
                    >
                      thepitlaneplug@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow the Chaos</h3>
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-smooth group"
                  >
                    <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-smooth">
                      @thepitlaneplug
                    </span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-smooth group"
                  >
                    <MessageCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-smooth">
                      @pitlaneplug_namibia
                    </span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="bg-gradient-card border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Quick Response</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I typically respond to emails within 24-48 hours. For urgent matters 
                  or time-sensitive opportunities, feel free to reach out on social media for faster response.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;