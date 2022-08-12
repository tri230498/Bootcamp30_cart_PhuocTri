import React, { Component } from "react";

export default class ModelGioHang extends Component {
  render() {
    const { gioHang, xoaGioHang, tangGiamSoLuong } = this.props; // lấy dữ liệu giỏ hàng từ  BaiTapGioHang
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ maxWidth: 800, width: 800 }}>
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã SP</th>
                    <th>Hình Ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {gioHang.map((spGH, index) => {
                    return (
                      <tr key={index}>
                        <td>{spGH.maSP}</td>
                        <td>
                          <img
                            src={spGH.hinhAnh}
                            alt={spGH.hinhAnh}
                            width={50}
                            height={75}
                            style={{ objectFit: "cover" }}
                          />
                        </td>
                        <td>{spGH.tenSP}</td>
                        <td>
                          <button
                            className="btn btn-primary me-2"
                            onClick={() => tangGiamSoLuong(spGH.maSP, true)}
                          >
                            +
                          </button>
                          {spGH.soLuong}
                          <button
                            className="btn btn-primary ms-2"
                            onClick={() => tangGiamSoLuong(spGH.maSP, false)}
                          >
                            -
                          </button>
                        </td>
                        <td>{spGH.giaBan.toLocaleString()}</td>
                        <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => xoaGioHang(spGH.maSP)}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5}>
                      <td>Tổng tiền:</td>
                      <td>
                        {this.props.gioHang.reduce(
                          (tongTien, spGioHang, index) => {
                            return (tongTien +=
                              spGioHang.soLuong * spGioHang.giaBan);
                          },
                          0
                        ).toLocaleString()}
                      </td>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
