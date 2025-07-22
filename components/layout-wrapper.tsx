export function LayoutWrapper({ children, id }: { children: React.ReactNode }) {
  return (
    <div className="w-[90%] max-w-screen-xl mx-auto" id={id}>
      <div className="w-full py-8 md:py-16 lg:py-24 flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
