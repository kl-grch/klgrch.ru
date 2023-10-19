import SectionAbout from "@/components/sectionAbout/SectionAbout";
import SectionAdvanced from "@/components/sectionAdvanced/SectionAdvanced";
import SectionContacts from "@/components/sectionContacts/SectionContacts";
import SectionPromo from "@/components/sectionPromo/SectionPromo";
import SectionWorks from "@/components/sectionWorks/SectionWorks";

export default function Home() {
  return (
    <main>
      <SectionPromo />
      <SectionAbout />
      <SectionAdvanced />
      <SectionWorks />
      <SectionContacts />
    </main>
  );
}
