export interface MessageType {
  type: 'updateSettings';
  data: {
    merchant_id: string;
    card_announcement: string[];
    card_display_order: string[];
  };
}

export interface StateContextType {
  cards: {
    id: string;
    name: string;
  }[];
  setCards: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        name: string;
      }[]
    >
  >;
  cardOrder: string[];
  notices: string[];
  setNotices: React.Dispatch<React.SetStateAction<string[]>>;
  passMessage: (event?: SyntheticEvent<HTMLIFrameElement>) => void;
}

export interface ModalContextType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DescriptionProps {
  description: string;
}

export interface SaveBtnProps {
  onClick: () => void;
  children?: React.ReactNode;
}

export interface TitleProps {
  title: string;
}

export interface CardProps {
  id: any;
  name: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

export interface DragItem {
  index: number;
  id: string;
  type: string;
}

export interface Item {
  id: string;
  name: string;
}

export interface ContainerState {
  cards: Item[];
}

export interface PreviewSectionProps {}

export interface ModalProps {
  title: string;
  isModalOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
