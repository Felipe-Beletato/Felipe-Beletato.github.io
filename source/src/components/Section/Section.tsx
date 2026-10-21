import type { ReactNode } from "react";
import { Container } from "../Container/Container";

type SectionProps = {
    id?: string;
    children: ReactNode;
};

export function Section({
    id,
    children,
}: SectionProps) {
    return(
        <section
        id={id}
        style={{
            padding: "96px 0"
        }}
        >
            <Container>
                {children}
            </Container>
    </section>
    );
}
