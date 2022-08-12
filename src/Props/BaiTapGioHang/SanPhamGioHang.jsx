import React, { Component } from "react";
export default class SanPhamGioHang extends Component {
  render() {
    const { sanPham, themGioHang, xenChiTiet } = this.props;
    // console.log(sanPham);
    // console.log(themGioHang)
    return (
      <div className="card text-start bg-dark text-white">
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt={sanPham.hinhAnh}
          width={200}
          height={300}
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <button className="btn btn-danger" onClick={() => themGioHang(sanPham)}>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
