function CategorySection({ sectionTitle, children }: CategorySectionProps) {
  return (
    <section className="flex flex-col py-10 gap-5">
      <h2 className="text-7xl">{sectionTitle}</h2>
      <div className="flex flex-wrap gap-5">{children}</div>
    </section>
  );
}

interface CategorySectionProps {
  sectionTitle: string;
  children: React.ReactNode;
}

export default CategorySection;
