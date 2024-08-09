import Project from "@/components/project/page";

export default function DiscographyPage() {
  return (
    <main className="min-h-screen justify-between py-24 px-16 md:px-16 bg-black text-white">
      <Project
        title="Project One"
        imageUrl="/images/static.png"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla."
      />
      <Project
        title="Project Two"
        imageUrl="/images/static_2.jpeg"
        description="This is the description for Project Two. The layout is the same, with different content.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla."
      />
    </main>
  );
}
