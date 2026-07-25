import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex-grow flex flex-col">{children}</div>
      <Footer />
      <BackToTop />
    </>
  );
}
