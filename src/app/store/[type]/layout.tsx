export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <p> is store lay out test</p>
      {children}
    </>
  );
}
