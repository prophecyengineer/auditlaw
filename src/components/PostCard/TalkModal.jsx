import { Button, Card, Grid, Title } from "@mantine/core";
import { useStoreState } from "pullstate";
import { PostStore } from "../../store";
import { getAllPeople } from "../../store/Selectors";

import styles from "./TalkModal.module.css";

export const TalkModal = ({ dismiss, talk, category, speakers }) => {
  const people = useStoreState(PostStore, getAllPeople);

  return (
    <div className="talk-modal">
      <Card>
        <Title>Talk Room</Title>

        <Button color="primary" onClick={dismiss}>
          Leave Room
        </Button>
      </Card>

      <div className={styles.modal}>
        <Grid className="ion-padding-start ion-padding-end ion-margin-start ion-margin-end">
          <Grid>
            <Grid.Col>
              <div className={styles.cardTitle}>
                <p>{category.name} talks</p>
              </div>
            </Grid.Col>
          </Grid>

          <Grid className={styles.talkTitle}>
            <Grid.Col>
              <h1>{talk.title}</h1>
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col>
              <div className={styles.detailCount}>
                <span>{talk.speakers} Speakers</span>
              </div>
            </Grid.Col>
          </Grid>

          <Grid className={styles.talkSpeakers}>
            {speakers.map((speaker, index) => {
              return (
                <Grid.Col className={styles.speakerContainer}>
                  <div
                    key={`speaker_${index}`}
                    className={`${styles.talkSpeaker} ${index === 0 &&
                      styles.activeSpeaker}`}
                  >
                    <img src={speaker.image} alt="avatar" />
                  </div>
                  <p>{speaker.name.split(" ")[0]}</p>
                </Grid.Col>
              );
            })}
          </Grid>

          <Grid>
            <Grid.Col>
              <div className={styles.detailCount}>
                <span>{talk.audience} Audience</span>
              </div>
            </Grid.Col>
          </Grid>

          <Grid className={styles.talkSpeakers}>
            {[...Array(talk.audience)].map((audience, index) => {
              return (
                <Grid.Col
                  className={`${styles.speakerContainer} ${styles.audienceContainer}`}
                >
                  <div key={`speaker_${index}`} className={styles.talkSpeaker}>
                    <img
                      src={people[Math.floor(Math.random() * 30)].image}
                      alt="avatar"
                    />
                  </div>
                  <p>
                    {people[Math.floor(Math.random() * 30)].name.split(" ")[0]}
                  </p>
                </Grid.Col>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
