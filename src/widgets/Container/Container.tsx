import { FC, memo, PropsWithChildren } from "react";

import styles from "./container.module.scss"
import { ClassNameType } from "@/shared/types/styles";

export const Container: FC<
    PropsWithChildren & ClassNameType
> = memo(({ children, className }) => {
    return (
      <div className={[styles.container, className].join(" ")}>
        {children}
      </div>
    );
});

Container.displayName = "Container"
