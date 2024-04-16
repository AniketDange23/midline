import { useGlobalContext } from "./context";

const PageHeader = () => {

  const { title, subTitle, banner } = useGlobalContext();

  return (
    <section
      className="section bg-cover overlay"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white mb-3">{title}</h2>
            {/* breadcrumb */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0">
                <li className="breadcrumb-item font-weight-semebold">
                  <a className="text-white" href="#" style={{ marginRight: "5px" }}>
                    Home <span>/</span>
                  </a>

                  <span className="text-primary">{subTitle}</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
