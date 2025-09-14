import { 
  Calendar, 
  Clock, 
  Plus, 
  Grid3X3 
} from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const eventFeatures = [
  {
    title: "Upcoming Events",
    description: "Discover and register for upcoming workshops, seminars, and networking events.",
    icon: <Calendar className="h-6 w-6 text-white" />,
  },
  {
    title: "Past Events",
    description: "Browse through previous events, access recordings, and download resources.",
    icon: <Clock className="h-6 w-6 text-white" />,
  },
  {
    title: "Propose Event",
    description: "Submit your ideas for new events and help shape the community calendar.",
    icon: <Plus className="h-6 w-6 text-white" />,
  },
  {
    title: "Categories",
    description: "Explore events by categories like technology, business, design, and more.",
    icon: <Grid3X3 className="h-6 w-6 text-white" />,
  },
];

const upcomingEvents = [
  {
    title: "AI & Machine Learning Workshop",
    date: "Dec 15, 2024",
    time: "2:00 PM - 5:00 PM",
    category: "Technology",
    attendees: 45,
  },
  {
    title: "Career Development Seminar",
    date: "Dec 18, 2024",
    time: "10:00 AM - 12:00 PM",
    category: "Career",
    attendees: 78,
  },
  {
    title: "Startup Pitch Competition",
    date: "Dec 22, 2024",
    time: "1:00 PM - 6:00 PM",
    category: "Business",
    attendees: 120,
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-hero border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Events &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Activities
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover, participate, and propose events that enhance your learning and networking experience
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {eventFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className="col-span-1"
              />
            ))}
          </div>

          {/* Upcoming Events Preview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Upcoming Events Preview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="bg-gradient-card border border-border/50 hover:shadow-card-asthra transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge 
                        variant="secondary" 
                        className="bg-asthra-green/10 text-asthra-green border-asthra-green/20"
                      >
                        {event.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {event.attendees} attending
                      </span>
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="bg-gradient-card border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Event Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Find events that match your interests and career goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Technology", "Business", "Design", "Career", "Networking", "Workshop", "Seminar", "Competition"].map((category) => (
              <div 
                key={category}
                className="bg-card p-4 rounded-lg border border-border hover:shadow-card-asthra transition-all duration-300 text-center cursor-pointer group"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}