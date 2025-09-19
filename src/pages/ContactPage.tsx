import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">{/* Add bottom padding on mobile for nav */}
      <Header />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;