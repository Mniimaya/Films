import React from 'react';
import ActorPoster from '../../components/ActorPoster/ActorPoster';
import { useParams } from 'react-router-dom';
import { getActor } from '../../API/FilmApi';
import { T_PERSON } from '../../TYPES/TYPES';

type T_PARAMS = {
  actorId: string;
};

const ActorPage = () => {
  const params = useParams<T_PARAMS>();
  const idActor: string | undefined = params.actorId;
  const [actor, setActor] = React.useState<T_PERSON>();

  React.useEffect(() => {
    getActor(String(idActor)).then((data) => {
      setActor(data.docs[0]);
    });
  }, [params.actorId]);
  return <div>{!!actor && <ActorPoster person={actor} />}</div>;
};

export default ActorPage;
