import { 
  Search, 
  FileText, 
  Trophy, 
  Video 
} from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";

const careerFeatures = [
  {
    title: "Job Board",
    description: "Browse through hundreds of job openings from top companies across various industries.",
    icon: <Search className="h-6 w-6 text-white" />,
  },
  {
    title: "My Applications",
    description: "Track your job applications, view status updates, and manage your application pipeline.",
    icon: <FileText className="h-6 w-6 text-white" />,
  },
  {
    title: "Success Stories",
    description: "Get inspired by alumni success stories and learn from their career journeys.",
    icon: <Trophy className="h-6 w-6 text-white" />,
  },
  {
    title: "Webinars",
    description: "Attend career-focused webinars featuring industry professionals and career coaches.",
    icon: <Video className="h-6 w-6 text-white" />,
  },
];

export default function CareerPortal() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-hero border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Career{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Portal
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your gateway to career opportunities, application tracking, and professional success
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {careerFeatures.map((feature, index) => (
            <div key={index} className="bg-gradient-card border border-border/50 rounded-lg p-8 hover:shadow-card-asthra transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="bg-gradient-card border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-muted-foreground">
              Fast-track your career development with these essential tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-card-asthra transition-all duration-300">
              <div className="w-12 h-12 bg-asthra-green rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Browse Jobs</h3>
              <p className="text-sm text-muted-foreground">Find your next opportunity</p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-card-asthra transition-all duration-300">
              <div className="w-12 h-12 bg-asthra-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Update Profile</h3>
              <p className="text-sm text-muted-foreground">Keep your information current</p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-card-asthra transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">View Analytics</h3>
              <p className="text-sm text-muted-foreground">Track your progress</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}