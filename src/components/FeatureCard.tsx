import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function FeatureCard({ 
  title, 
  description, 
  icon, 
  href, 
  className,
  onClick 
}: FeatureCardProps) {
  const CardWrapper = href ? "a" : "div";
  
  return (
    <CardWrapper 
      {...(href ? { href } : {})}
      {...(onClick ? { onClick } : {})}
      className={cn(
        "block group cursor-pointer",
        className
      )}
    >
      <Card className="h-full bg-gradient-card border border-border/50 hover:shadow-card-asthra transition-all duration-300 group-hover:scale-105 group-hover:border-primary/30">
        <CardHeader className="pb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-asthra transition-all duration-300">
            {icon}
          </div>
          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}