import { 
  Users, 
  Briefcase, 
  Video, 
  GraduationCap, 
  MessageSquare 
} from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";

const homeFeatures = [
  {
    title: "Mentorship",
    description: "Connect with experienced professionals and get personalized guidance for your career growth.",
    icon: <Users className="h-6 w-6 text-white" />,
  },
  {
    title: "Internships",
    description: "Discover exciting internship opportunities that match your skills and career aspirations.",
    icon: <Briefcase className="h-6 w-6 text-white" />,
  },
  {
    title: "Webinars",
    description: "Join live sessions with industry experts and learn about the latest trends and technologies.",
    icon: <Video className="h-6 w-6 text-white" />,
  },
  {
    title: "Training",
    description: "Access comprehensive training programs designed to enhance your technical and soft skills.",
    icon: <GraduationCap className="h-6 w-6 text-white" />,
  },
  {
    title: "Feedback",
    description: "Share your thoughts and help us improve the platform for better learning experiences.",
    icon: <MessageSquare className="h-6 w-6 text-white" />,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Welcome to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Asthra
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your comprehensive student portal for career development, learning opportunities, 
              and professional growth. Explore mentorship, internships, and much more.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Discover Your Path to Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive platform designed to support your academic and professional journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className="col-span-1"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-card border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-muted-foreground">Active Students</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                100+
              </div>
              <p className="text-muted-foreground">Mentors Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                250+
              </div>
              <p className="text-muted-foreground">Opportunities Posted</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}