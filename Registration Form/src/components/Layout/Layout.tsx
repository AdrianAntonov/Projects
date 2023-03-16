import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react';

function Layout(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <main className="flex h-[100vh] flex-col items-center justify-center bg-gradient-radial from-[#25362f] via-[#2e493e] to-[#385247]">
      {props.children}
    </main>
  );
}

export default Layout;
