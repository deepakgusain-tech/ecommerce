import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip"
import { CustomerSidebar } from "./customer-sidebar";
import { CartProvider } from "@/components/cart-provider";

export default function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CartProvider>
        <TooltipProvider>
          <Navbar />
          <main className="flex-1 relative">
            <div className="relative">
              {/* Desktop: place sidebar absolutely so its internal full-width wrapper won't push content */}
              <div className="hidden md:block md:absolute md:inset-y-0 md:left-0 md:w-64">
                <CustomerSidebar />
              </div>

              <div className="flex w-full">
                <div className="flex-1 md:ml-64">
                  {children}
                </div>
              </div>
            </div>
          </main>
          <br />
          <Footer />
        </TooltipProvider>
      </CartProvider>
    </>
  );
}
