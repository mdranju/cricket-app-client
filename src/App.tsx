// App.jsx
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  ChevronRight,
  Code,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Phone,
  Rocket,
  Sparkles,
  Star,
  Twitter,
  Users,
} from "lucide-react";
import { useState } from "react";

// Mock data for portfolio
const portfolioItems = [
  { id: 1, title: "Luxury Watch Brand", category: "Branding" },
  { id: 2, title: "High-End Fashion", category: "Digital" },
  { id: 3, title: "Premium Hospitality", category: "Strategy" },
  { id: 4, title: "Art Gallery Launch", category: "Branding" },
  { id: 5, title: "Luxury Automotive", category: "Digital" },
  { id: 6, title: "Fine Dining Experience", category: "Strategy" },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "CEO, Lumina Watches",
    content:
      "Cricket transformed our brand identity with unparalleled elegance and precision. Their attention to detail is unmatched.",
    avatar: "AC",
  },
  {
    id: 2,
    name: "Marcus Dubois",
    role: "Creative Director, Maison Élégante",
    content:
      "Working with Cricket elevated our digital presence to new heights. Their strategic approach delivered exceptional results.",
    avatar: "MD",
  },
  {
    id: 3,
    name: "Isabella Rossi",
    role: "Founder, Bella Vista Resorts",
    content:
      "The team at Cricket understands luxury like no other. They captured our essence perfectly in every touchpoint.",
    avatar: "IR",
  },
];

const App = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 md:px-8">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-amber-50 opacity-20 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-amber-100 opacity-10 -translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-amber-50 rounded-full border border-amber-100">
              <Sparkles className="w-4 h-4 text-amber-600 mr-2" />
              <span className="text-amber-700 font-medium">
                Crafting timeless experiences
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Elevate Your <span className="text-amber-600">Brand</span> to
              Luxury
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Cricket redefines premium brand experiences through meticulous
              design, strategic innovation, and unparalleled craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Begin Your Journey
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 px-8 py-6 text-lg rounded-full hover:bg-gray-50"
              >
                Explore Our Work
              </Button>
            </div>
          </div>

          {/* U-shaped motif */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32">
            <svg viewBox="0 0 100 50" className="w-full h-full">
              <path
                d="M10,45 Q50,5 90,45"
                stroke="#F59E0B"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Signature Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We craft bespoke solutions that elevate brands to the pinnacle of
              luxury and distinction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Luxury Branding",
                desc: "Crafting distinctive identities that resonate with discerning audiences.",
              },
              {
                icon: Code,
                title: "Digital Experiences",
                desc: "Creating immersive digital platforms that embody sophistication.",
              },
              {
                icon: Rocket,
                title: "Strategic Innovation",
                desc: "Developing forward-thinking strategies that redefine market positions.",
              },
              {
                icon: Users,
                title: "Client Partnerships",
                desc: "Building collaborative relationships founded on trust and excellence.",
              },
              {
                icon: Award,
                title: "Award-Winning Design",
                desc: "Delivering visually stunning solutions recognized globally.",
              },
              {
                icon: Sparkles,
                title: "Experiential Marketing",
                desc: "Designing memorable moments that forge lasting emotional connections.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-amber-500/20 "
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Curated Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A selection of our most distinguished collaborations and
              transformative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-amber-200">{item.category}</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* U-shaped motif at bottom */}
          <div className="mt-16 flex justify-center">
            <div className="w-48 h-16">
              <svg viewBox="0 0 100 30" className="w-full h-full">
                <path
                  d="M10,25 Q50,5 90,25"
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.2"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-96" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-amber-100 border-4 border-white"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-amber-50 border-4 border-white"></div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Cricket Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded on the principles of timeless elegance and meticulous
                craftsmanship, Cricket exists to redefine what luxury means in
                the modern era.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of visionaries, strategists, and artisans collaborate
                to create experiences that transcend expectations and endure
                through generations.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "12+", label: "Years of Excellence" },
                  { value: "98%", label: "Client Retention" },
                  { value: "50+", label: "Global Brands" },
                  { value: "24", label: "Industry Awards" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Perspectives
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from the visionary leaders who have partnered with Cricket to
              transform their brands.
            </p>
          </div>

          <div className="relative">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 italic">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>

                <div className="flex items-center">
                  <Avatar className="w-14 h-14 mr-4">
                    <AvatarFallback className="bg-amber-100 text-amber-800 font-medium">
                      {testimonials[activeTestimonial].avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeTestimonial ? "bg-amber-600" : "bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-amber-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronRight className="w-6 h-6 rotate-180 text-gray-700" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-amber-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* U-shaped motif */}
          <div className="mt-16 flex justify-center">
            <div className="w-32 h-12">
              <svg viewBox="0 0 100 20" className="w-full h-full">
                <path
                  d="M10,18 Q50,2 90,18"
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.2"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Begin Your Journey
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to elevate your brand? Our team is prepared to craft an
                experience that exceeds your highest expectations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">hello@cricket.com</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <div className="font-medium text-gray-900">Studio</div>
                    <div className="text-gray-600">
                      123 Luxury Avenue, New York, NY 10001
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  {[Instagram, Twitter, Linkedin].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-amber-100 hover:text-amber-600 transition-colors"
                      aria-label={`${Icon.name} link`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Card className="border shadow-lg bg-white">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="py-5"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="py-5"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your vision..."
                        rows={5}
                        className="py-5 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-gray-900">Cricket</div>
              <p className="text-gray-600 mt-2">
                Crafting timeless luxury experiences
              </p>
            </div>

            <div className="flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-amber-600 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-amber-600 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-amber-600 transition-colors"
              >
                Careers
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            © {new Date().getFullYear()} Cricket. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
