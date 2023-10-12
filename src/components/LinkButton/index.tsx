import * as S from './style';

export const LinkButton = (props: any) => {
  return <S.LinkButton href={props.href}>{props.text}</S.LinkButton>;
};
