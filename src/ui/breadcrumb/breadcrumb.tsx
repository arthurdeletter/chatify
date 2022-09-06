import styled from "styled-components";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import { FC } from "react";

const BreadcrumbContainer = styled.div({
  display: "flex",
  alignItems: "center",
  padding: "1.5rem 0",
  fontSize: "1.1rem",
});

const BCItemContainer = styled.div({
  display: "flex",
  alignItems: "center",
  "> p": {
    cursor: "pointer",
    marginRight: ".15rem",
    ":hover": {
      textDecoration: "underline",
    },
  },
  "> svg": {
    marginRight: ".15rem",
  },
});

const BCItem: FC<{ name: string; onClick: () => void }> = ({
  name,
  onClick,
}) => (
  <BCItemContainer>
    <p onClick={onClick}>{name}</p>
    <ChevronRightIcon />
  </BCItemContainer>
);

type BCItemType = {
  name: string;
  to: string;
};

type BreadCrumbTypes = {
  onNavigate: (to: string) => void;
  breadcrumbs: BCItemType[];
  children: React.ReactNode;
};

const Breadcrumb: FC<BreadCrumbTypes> = ({
  onNavigate,
  breadcrumbs,
  children,
}) => {
  return (
    <BreadcrumbContainer>
      {breadcrumbs.map((bc, i) => (
        <BCItem key={i} name={bc.name} onClick={() => onNavigate?.(bc.to)} />
      ))}
      <strong>{children}</strong>
    </BreadcrumbContainer>
  );
};

export { Breadcrumb };
