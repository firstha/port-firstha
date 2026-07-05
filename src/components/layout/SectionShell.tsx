import { cn } from "@/lib/utils";
import { Container } from "@/components/common/Container";

type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function SectionShell({
  children,
  className,
  id,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("py-24 relative", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}