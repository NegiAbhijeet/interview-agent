export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[90%] max-w-screen-xl mx-auto">
      {children}
    </div>
  )
}
