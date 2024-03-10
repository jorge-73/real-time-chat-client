const GenderCheckBox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label htmlFor="male" className="label gap-2 cursor-pointer">
          <span className=" label-text">Male</span>
          <input type="checkbox" id="male" className="checkbox checkbox-accent" />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="female" className="label gap-2 cursor-pointer">
          <span className=" label-text">Female</span>
          <input type="checkbox" id="female" className="checkbox checkbox-secondary" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
