import classNames from "classnames";
import {
  forwardRef,
  type HTMLAttributes,
  memo,
  type RefObject,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";

import { Spinner } from "../Spinner";

export interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
  onResizeElement?: (entry: ResizeObserverEntry) => void;
  loading?: boolean;
}

export const Component = memo(
  forwardRef<HTMLDivElement, ComponentProps>(function Component(
    { children, className, loading, onResizeElement, ...props }: ComponentProps,
    ref,
  ) {
    const internalRef = useRef(null) as RefObject<HTMLDivElement>;
    const resizeObserver = useMemo(
      () =>
        new ResizeObserver((entries) => {
          entries.forEach((entry) => {
            onResizeElement?.(entry);
          });
        }),
      [onResizeElement],
    );

    useImperativeHandle(ref, () => internalRef.current!, []);

    useEffect(() => {
      if (internalRef.current === null) return;

      const component = internalRef.current;
      resizeObserver.observe(component);

      return () => {
        resizeObserver.unobserve(component);
      };
    }, [resizeObserver]);

    return (
      <div
        className={classNames(
          { "flex flex-col justify-center": loading },
          className,
        )}
        ref={internalRef}
        {...props}
      >
        {loading ? (
          <Spinner className="max-h-[48px] max-w-[48px] self-center" />
        ) : (
          children
        )}
      </div>
    );
  }),
);
