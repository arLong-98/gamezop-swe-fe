function CategorySection({ sectionTitle, children }: CategorySectionProps) {
  return (
    <section className="flex flex-col py-10 gap-5">
      <h2 className="text-4xl md:text-5xl">{sectionTitle}</h2>
      <div className="flex flex-col tablet:flex-row tablet:max-laptop:overflow-scroll laptop:flex-wrap tablet:gap-x-[20px] laptop:gap-x-[24px] gap-y-[30px]">
        {children}
      </div>
    </section>
  );
}

interface CategorySectionProps {
  sectionTitle: string;
  children: React.ReactNode;
}

export default CategorySection;
