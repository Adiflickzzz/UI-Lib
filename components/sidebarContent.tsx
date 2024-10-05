interface SidebarContentProps {
  header: string;
  list: string[];
}

export const SidebarContent = ({ header, list }: SidebarContentProps) => {
  return (
    <div>
      <div className="space-y-6 ">
        <div className="font-semibold">{header}</div>
        <div className="text-lg space-y-2">
          <div className="">Introduction</div>
          <div className="">Installation</div>
          <div className="">Button</div>
          <div className="">Form</div>
          <div className="">Button 2</div>
        </div>
      </div>
    </div>
  );
};
