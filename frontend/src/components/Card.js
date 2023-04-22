import bagImg from "../assets/tote-bag.webp";

const Card = () => {
  return (
    <div className="col my-3">
      <div className="card h-100 card-gradient-bg border-0 rounded-0">
        <img src={bagImg} className="card-img-top" alt="tote bag" />
        <div className="card-body">
          <h5 className="card-title">Tote bag</h5>
          <div className="btn btn-primary">Book</div>
        </div>
        <div className="card-footer">
          <small className="text-muted">Only 1 left</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
