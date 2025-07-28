export function NotFound({ children }: { children?: any }) {
  return (
    <div>
      { children || (<p>Not Found</p>)}
    </div>
  );
}
