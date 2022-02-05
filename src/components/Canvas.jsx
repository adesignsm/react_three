import React from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";
import * as THREE from "three";

function Box() { //box mesh

    return (
        <mesh position = {[0, 1, 0]}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
            <meshLambertMaterial attach = "material" color = "hotpink" />
        </mesh>
    )
}

function Ground() { //ground mesh
    
    return (
        <mesh position = {[0, 0, 0]} rotation = {[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach = "geometry" args = {[100, 100, 100]}/>
            <meshBasicMaterial attach = "material" color = "teal" side = {THREE.DoubleSide} />
        </mesh>
    )
}

const CanvasElement = () => {

    return (
        <div style = {{position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "#333"}}>
            <Canvas>
                <OrbitControls />
                <Stars />
                <ambientLight intensity = {0.5} />
                <spotLight position = {[10, 15, 10]} angle = {0.3} />
                <Box />
                <Ground />
            </Canvas>
        </div>
    )
}

export default CanvasElement;