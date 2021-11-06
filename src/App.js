import "./styles.css";
import { Movie } from "./Movie";

export default function App() {
  const movie_data = [
    {
      name: "Iron Man",
      pic:
        "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg",
      summary:
        "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.",
      rating: 7.9,
      genre: "Action/Adventure/Sci-fi",
      runningTime: "2h 6m"
    },
    {
      name: "Avengers Endgame",
      pic:
        "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
      summary:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      rating: 9.4,
      genre: "Action/Adventure/Sci-fi",
      runningTime: "3h 2m"
    },
    {
      name: "Interstellar",
      pic:
        "https://doms2cents.com/wp-content/uploads/2021/09/interstellar-et00019066-19-02-2021-02-25-12.jpg",
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      rating: 8.6,
      genre: "Sci-fi/Adventure",
      runningTime: "2h 49m"
    },
    {
      name: "M.S. Dhoni: The Untold Story",
      pic:
        "https://upload.wikimedia.org/wikipedia/en/3/33/M.S._Dhoni_-_The_Untold_Story_poster.jpg",
      summary:
        "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
      rating: 7.9,
      genre: "Sport/Drama/Biopic",
      runningTime: "3h 40m"
    },
    {
      name: "Southpaw",
      pic:
        "https://i.pinimg.com/originals/58/3f/06/583f062659b8ea30771871c5b770104f.jpg",
      rating: 7.4,
      genre: "Drama/Sport",
      runningTime: "2h 4m",
      summary:
        "Boxer Billy Hope hits rock-bottom after losing his family and falls into depression. His encounter with a former boxer gives him hope to stand up once again."
    }
  ];
  return (
    <div className="App">
      <form className="movieForm m-5">
        <h3 class="m-3">Movie Details</h3>
        {/* Row 1 */}
        <div class="row">
          <div class="col">
            <div className="form-group ">
              <label for="moviename">Movie Name </label>
              <input type="text" class="form-control" id="moviename" />
            </div>
          </div>
          <div class="col">
            <div className="form-group ">
              <label htmlfor="movieImage">Movie Image link </label>
              <input
                type="text"
                class="form-control"
                id="movieImage"
                placeholder="Enter online link"
              />
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div class="row">
          <div class="col">
            <div className="form-group ">
              <label for="imdb">IMDB Rating</label>
              <input type="text" class="form-control" id="imdb" />
            </div>
          </div>
          <div class="col">
            <div className="form-group ">
              <label for="genre">Genre</label>
              <input type="text" class="form-control" id="genre" />
            </div>
          </div>
          <div class="col">
            <div className="form-group ">
              <label for="time">Running Time</label>
              <input
                type="text"
                class="form-control"
                id="time"
                placeholder="(eg)02h 05m"
              />
            </div>
          </div>
        </div>
        <div className="form-group ">
          <label for="summary">Summary</label>
          <textarea class="form-control" id="summary" rows="3"></textarea>
        </div>
        <button
          type="button"
          class="btn btn-primary submit"
          // onClick={addData()}
        >
          Submit
        </button>
      </form>
      <div className="movieDetails">
        {movie_data.map((x) => (
          <Movie
            pic={x.pic}
            name={x.name}
            genre={x.genre}
            summary={x.summary}
            runningTime={x.runningTime}
            rating={x.rating}
          />
        ))}
      </div>
    </div>
  );
}

// function addData() {
//   let obj = {
//     name: document.getElementById("moviename").Value,
//     pic: document.getElementById("movieImage").value,
//     rating: document.getElementById("imdb").value,
//     runningTime: document.getElementById("time").value,
//     summary: document.getElementById("summary").value
//   };
//   console.log(obj);
// }
