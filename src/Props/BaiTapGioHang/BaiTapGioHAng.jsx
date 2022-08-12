import React, { Component } from "react";
import DanhSachSanPhamGioHang from "./DanhSachSanPhamGioHang";
import ModelGioHang from "./ModelGioHang";

export default class BaiTapGioHAng extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [],
    };
  }

  // Lấy dữ liệu tại componentBaiTapGioHang
  themGioHang = (sanPhamChon) => {
    // B1 từ sản phẩm được chọn tạo ra sản phẩm giỏ hàng
    let spGioHang = {
      maSP: sanPhamChon.maSP,
      tenSP: sanPhamChon.tenSP,
      giaBan: sanPhamChon.giaBan,
      hinhAnh: sanPhamChon.hinhAnh,
      soLuong: 1,
    };
    // Kiểm tra sản phẩm có trong giỏ hàng chưa
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      // Sản phẩm được click chưa có trong this.state.gioHang
      gioHangCapNhat.push(spGioHang);
    }
    // Set state để component render lại
    this.setState({
      gioHang: gioHangCapNhat,
    });

    // console.log(sanPhamChon);
    // this.setState({
    //   gioHang: [...this.state.gioHang, sanPhamChon],
    // });
  };

  //================== Đặt sự kiện xóa giỏ hàng tại BTGioHang ==================//
  xoaGioHang = (maSP) => {
    // Cách 1:
    // Tìm trong giỏ hàng có sp chứa maSP được click thì xóa
    // var gioHangCapNhat = [...this.state.gioHang];
    // let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    // if (index !== -1) {
    //   gioHangCapNhat.splice(index, 1);
    // }

    // Cách 2:
    var gioHangCapNhat = this.state.gioHang.filter((sp) => sp.maSP !== maSP);
    // Cập nhật lại stata giỏ hàng và render giao diện
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  //=========== Hàm tăng giảm số lượng trong gioHang ================//

  tangGiamSoLuong = (maSP, tangGiam) => {
    // tangGiam === true: Tăng số lượng, false: Giảm số lượng
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    // Xử lý tăng giảm
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }
    // Cập nhật lại giá trị và render lại giở hàng
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);

    return (
      <div className="container">
        <h3 className="text-center text-success">Bài tập giỏ hàng</h3>     
        <ModelGioHang
          xoaGioHang={this.xoaGioHang}
          gioHang={this.state.gioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <div className="text-end text-danger">
          <span
            style={{ cursor: " pointer", fontSize: 17, fontWeight: "bold" }}
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Giỏ hàng ({tongSoLuong})
          </span>
        </div>
        <DanhSachSanPhamGioHang themGioHang={this.themGioHang} />
      </div>
    );
  }
}