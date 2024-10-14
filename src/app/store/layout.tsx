export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <p> is store test</p>
      {children}
    </>
  );
}
