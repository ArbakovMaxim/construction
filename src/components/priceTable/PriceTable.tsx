import { CheckMark } from "../../image/svg/CheckMark";
import "./PriceTable.css";

export const PriceTable = () => {
  return (
    <div className="priceTable__wrapper">
      <table className="custom-table">
        <thead>
          <tr>
            <th className="priceTable__thTitlefirst">items</th>
            <th>
              <h2 className="priceTable__thTitle">BASIC</h2>
              <p className="priceTable__thText">$20 per m2</p>
            </th>
            <th>
              <h2 className="priceTable__thTitle">STANDARD</h2>
              <p className="priceTable__thText">$30 per m2</p>
            </th>
            <th>
              <h2 className="priceTable__thTitle">BUSINESS</h2>
              <p className="priceTable__thText">$40 per m2</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="custom-table__title--td">Installation plan</td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
          </tr>
          <tr>
            <td className="custom-table__title--td">
              Planning solutions (2-3 options)
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
          </tr>
          <tr>
            <td className="custom-table__title--td">Lighting plan</td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
          </tr>
          <tr>
            <td className="custom-table__title--td">Flooring plan</td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
          </tr>
          <tr>
            <td className="custom-table__title--td">
              Heating floor laying scheme
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
          </tr>
          <tr>
            <td className="custom-table__title--td">
              Air conditioner zones layout
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
          </tr>
          <tr>
            <td className="custom-table__title--td">
              3D visualization of all rooms
            </td>
            <td className="custom-table__title--td custom-table__text--td">
              simplified
            </td>
            <td>
              <CheckMark />
            </td>
            <td>
              <CheckMark />
            </td>
          </tr>
          <tr>
            <td className="custom-table__title--td">
              Visualization of each room (3-4 angles)
            </td>
            <td></td>
            <td></td>
            <td>
              <CheckMark />
            </td>
          </tr>
          <tr>
            <td className="custom-table__title--td">Terms</td>
            <td className="custom-table__title--td custom-table__text--td">
              10 days
            </td>
            <td className="custom-table__title--td custom-table__text--td">
              20 days
            </td>
            <td className="custom-table__title--td custom-table__text--td">
              30 days
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <button className="priceTable__button">send request</button>
            </td>
            <td>
              <button className="priceTable__button">send request</button>
            </td>
            <td>
              <button className="priceTable__button">send request</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
