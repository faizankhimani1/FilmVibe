import React from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const movies = [
  {
    id: 1,
    title: "Kalki 2898 AD",
    genre: "Action, Science fiction, Adventure, Thriller, Drama",
    cast: "Prabhas, Deepika Padukone, Kamal Hassan, Amitabh Bachchan",
    trailer: ["https://www.youtube.com/embed/kQDd1AhGIHk?si=sfI0pyPjt2I3IJ6E"],
    description:
      "Kalki 2898 AD is a 2024 Indian science fiction film set in a dystopian future that follows a group of people on a mission to save the unborn child of lab subject SUM-80, also known as Sumathi (Deepika Padukone). The child, Kalki, is the tenth avatar of the Hindu god Vishnu, who is believed to come to Earth to protect the world from evil. The film stars Prabhas as bounty hunter Bhairava, who is tasked with capturing Sumathi along with his AI droid sidekick Bujji (Keerthy Suresh). Amitabh Bachchan plays Ashwatthama, a warrior who was cursed by Krishna to wander the Earth for eternity after trying to kill an unborn holy child. Ashwatthama must protect and rescue Sumathi at all costs. The film also stars SUM-80 (Deepika Padukone) and Bhairava (Prabhas).",
    downloadLink:
      "https://drive.google.com/file/d/10mUdlhW80JTpgNrapQH54Ko0pApWzRgL/view?usp=sharing", // Replace with actual download link
  },
  {
    id: 2,
    title: "Kill",
    genre: "Action, Thriller, Adventure, Drama, Crime Fiction",
    cast: "Lakshya , Raghav Juyal, Tanya Maniktala , Ashish Vidyarthi, Harsh Chaya, Abhishek Chauhan, Adrija Sinha.",
    trailer: ["https://www.youtube.com/embed/da7lKeeS67c?si=Ls89y9qxRKjtRoMJ"],
    description:
      "Kill is a 2023 Indian action, crime, and drama film about an army commando who tries to stop an arranged marriage. The movie is about Amrit Rathod (Lakshya), an NSG commando, who learns that his girlfriend Tulika (Tanya Maniktala) is engaged against her will by her wealthy father (Harsh Chhaya). Amrit boards a train to New Delhi with his best friend and fellow soldier Viresh (Abhishek Chauhan) to stop the marriage. However, during the trip, a gang of knife-wielding bandits led by Fani (Raghav Juyal) terrorize the passengers, and Amrit and Viresh must fight them to save the others.",
    downloadLink:
      "https://drive.google.com/file/d/1wwuOuJxVGT0X69H1tJn47MvOSCTBvWR_/view?usp=sharing",
  },
  {
    id: 3,
    title: "Stree 2",
    genre: "Comedy, Horror",
    cast: "Shradhha Kapoor, Rajkumar Rao, Pankaj Tripathi, Tamannah Bhatia.",
    trailer: ["https://www.youtube.com/embed/KVnheXywIbY?si=N4uGX_6v0qKiR7LE"],
    description:
      "Stree 2: Sarkate Ka Aatank (transl. Woman 2: Terror of the Headless) is a 2024 Indian Hindi-language comedy horror film directed by Amar Kaushik, written by Niren Bhatt, and produced jointly by Maddock Films and Jio Studios. It is the fifth installment in the Maddock Supernatural Universe and serves as the sequel to Stree (2018). The film stars Shraddha Kapoor, Rajkummar Rao, Pankaj Tripathi, Abhishek Banerjee and Aparshakti Khurana.[7] The narrative follows a group of friends who must defeat a malevolent entity abducting the women of Chanderi Kaushik first expressed interest in developing a sequel to Stree in October 2018. By February 2022, Rao confirmed that the project was in development; however, original writers and producers Raj & DK were no longer involved, having parted ways with producer Dinesh Vijan over disputes regarding the rights to the franchise. As a result, Bhatt took over as the writer. The sequel was officially announced by Vijan and Jyoti Deshpande in April 2023. Principal photography began in July of the same year, primarily taking place in Chanderi and Bihar, and concluded by mid-2024. Sachin–Jigar returned to compose the soundtrack, with Justin Varghese composing the background score. Cinematography was conducted by Jishnu Bhattacharjee, and the editing was handled by Hemanti Sarkar.",
    downloadLink:
      "https://drive.google.com/file/d/1uU2unb8F_60QQfkhYytgVT1YWx_6LONE/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Bad Newz  ",
    genre: "Comedy, Drama",
    cast: "Vicky Kaushal, Tripti Dimri, Ammy Virk, Neha Dhupia",
    trailer: ["https://www.youtube.com/embed/uV50UfcIT68?si=Fui2-JnezvDZqSuC"],
    description:
      "Bad Newz is a bizarre, rare comedy about heteropaternal superfecundation! A twist of fate leads to Saloni Bagga`s twin pregnancy being fathered by both Akhil Chadha and Gurbir Pannu, setting off a chaotic rivalry for her love and their children. As Akhil and Gurbir vie for Saloni`s affections, chaos ensues.",
    downloadLink: "https://drive.google.com/file/d/1H1UDsBaqBIpaZfFL_C8AE1KK72Y7Hs0c/view?usp=sharing",
  },
  {
    id: 5,
    title: "Khel Khel Mein  ",
    genre: "Comedy, Drama",
    cast: "Akshay Kumar, Vaani Kapoor, Ammy Virk, Taapsee Pannu, Aditya Seal, Pragya Jaiswal ",
    trailer: ["https://www.youtube.com/embed/RKZJtoFoaQg?si=WQ0cSTsD5t_FeSNv"],
    description:
      "The film is about a patriarch named Purshottam who returns from the afterlife to stop his grandson's marriage to his childhood sweetheart. Purshottam uses magic to create a comedic clash between his outdated principles and his grandson's modern values. ",
    downloadLink:
      "https://drive.google.com/file/d/1ZRedQQ0FFKDPAuejC-XE5dGYWzAehXhq/view?usp=sharing",
  },
  {
    id: 6,
    title: "Joker",
    genre: "Suspense, Drama, Thriller",
    cast: "Joaquin Phoenix, Lady Gaga",
    trailer: ["https://www.youtube.com/embed/_OKAwz2MsJs?si=L1Abo8TdJehb6oqU"],
    description:
      "Joker Folie A Deux finds Arthur Fleck institutionalized at Arkham awaiting trial for his crimes as Joker. While struggling with his dual identity, Arthur not only stumbles upon true love, but also finds the music that always been inside him.",
    downloadLink: "https://drive.google.com/file/d/1i5IxWOC7ruvKsHJuwX38NYUL4vKu2H3F/view?usp=sharing",
  },
  {
    id: 7,
    title: "Thalapathy is the G.O.A.T.",
    genre: "Action,Drama,Thriller",
    cast: "Vijay, Kokila Mohan, Yogi Babu, Prashanth Thiagarajan, Prabhu Deva",
    trailer: ["https://www.youtube.com/embed/Uf8rt635LLo?si=MMYVzFUNRdYTxHiR"],
    description:
      "Thalapathy (Vijay), often hailed as the G.O.A.T. of Indian cinema, has captivated audiences with his magnetic screen presence, versatile acting, and undeniable charm. His journey from a rising star to a cinema legend is marked by blockbuster hits, iconic roles, and a deep connection with his fans. Known for delivering larger-than-life performances, Thalapathy is celebrated for his action-packed films, heartfelt drama, and dynamic dance moves. With a career spanning decades, he continues to push boundaries and inspire millions, solidifying his legacy as one of the greatest of all time in Tamil cinema.",
    downloadLink:
      "https://drive.google.com/file/d/12u_rqx4gLFbuJeWqXT6bk83Jeeh7qbd6/view?usp=drive_link",
  },
  {
    id: 8,
    title: "Kahan Shuru Kaha Khatam",
    genre: "Comedy, Romantic",
    cast: "Dhvani Bhanushali, Aashim Gulati",
    trailer: ["https://www.youtube.com/embed/CaLFmah0xpc?si=si1oye0AAz0eAGcg"],
    description:
      "Kahan Shuru Kaha Khatam is a gripping drama that explores the intertwined lives of three individuals, each on a quest to discover the meaning of their existence. As their paths cross unexpectedly, they find themselves caught in a whirlwind of emotions, secrets, and choices that will define their futures. The film beautifully weaves together themes of love, loss, and destiny, highlighting how beginnings and endings are often blurred, leaving the characters—and the audience—wondering where their journey truly started and where it will end.",
    downloadLink:
      "https://drive.google.com/file/d/12bji-44ZIv6qE8zLMldZob03fkPcumAg/view?usp=sharing",
  },
  {
    id: 9,
    title: "Auron Mein Kahan Dum Tha",
    genre: "Drama,Romantic",
    cast: "Ajay Devgan, Tabu, Jimmy Shergil",
    trailer: ["https://www.youtube.com/embed/2lr5h0IqArI?si=XtmnxqITsT27So2_"],
    description:
      "Dushman the hum hi apne, auron mein kahan dum tha. Bound by fate. Defined by love",
    downloadLink: "https://drive.google.com/file/d/1VYzyhXW08K4YJ_dsYsK8OAG7jFNHXxYf/view?usp=sharing",
  },
  {
    id: 10,
    title: "Vedaa",
    genre: "Action, Drama",
    cast: "John Abraham, Sharavi wagh, Abhishek Banerjee, Tamanaah Bhatis",
    trailer: ["https://www.youtube.com/embed/_jr8HiBykLA?si=zynKEI-7IOz9ff-z"],
    description:
      "It is the story of a young woman who fought back, steered, and championed by the one man she believed was her saviour, who became her weapon. It is the story of a man who found himself while helping Vedaa find justice.",
    downloadLink: "https://drive.google.com/file/d/1UlvnoNnaa8eLlL8QUscFihIClc5EfKRY/view?usp=sharing",
  },
  // Add more movie objects here3
];

const MovieDetailPage = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h3" gutterBottom>
        {movie.title}
      </Typography>
      <Carousel>
        {movie.trailer.map((url, index) => (
          <div key={index}>
            <iframe
              width="100%"
              height="500px"
              src={url}
              title={`Trailer ${index + 1}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Carousel>
      <Box mt={4}>
        <Typography variant="h5">Genre: {movie.genre}</Typography>
        <Typography variant="h5">Cast: {movie.cast}</Typography>
        <Typography variant="body1" paragraph>
          {movie.description}
        </Typography>
        <Button variant="contained" color="primary" href={movie.downloadLink}>
          Download Movie
        </Button>
      </Box>
    </div>
  );
};

export default MovieDetailPage;
