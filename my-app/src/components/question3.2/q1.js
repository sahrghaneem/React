const Q1 =() => {
    return(
        <div className="q1">
            <h4>How Much you love front end?</h4>  
            <main>
      <section>
        <input type="range" min={0} max={1}
          step={0.02}/>
      </section>
    </main>
    </div>
  );
}

export default Q1;