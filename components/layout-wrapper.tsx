export function LayoutWrapper({ children, id }: { children: React.ReactNode }) {
  return (
    <div className="w-[90%] max-w-screen-xl mx-auto" id={id}>
      <div className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
