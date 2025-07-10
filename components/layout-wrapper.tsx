export function LayoutWrapper({ children, id }: { children: React.ReactNode }) {
  return (
    <div className="w-[90%] max-w-screen-xl mx-auto" id={id}>
      <div className="w-full min-h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
