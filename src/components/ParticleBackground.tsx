'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const meshesRef = useRef<THREE.Group[]>([])

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Create geometric shapes network
    const createGeometricNetwork = () => {
      const group = new THREE.Group()
      
      // Nodes - geometric shapes
      const nodeCount = 50
      const nodes: THREE.Mesh[] = []
      
      for (let i = 0; i < nodeCount; i++) {
        // Random geometric shapes
        const shapeType = Math.floor(Math.random() * 4)
        let geometry: THREE.BufferGeometry
        
        switch (shapeType) {
          case 0:
            geometry = new THREE.OctahedronGeometry(0.02 + Math.random() * 0.03)
            break
          case 1:
            geometry = new THREE.TetrahedronGeometry(0.02 + Math.random() * 0.03)
            break
          case 2:
            geometry = new THREE.IcosahedronGeometry(0.02 + Math.random() * 0.03)
            break
          default:
            geometry = new THREE.SphereGeometry(0.01 + Math.random() * 0.02, 8, 8)
        }
        
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(
            0.55 + Math.random() * 0.15, // Blue to purple hue
            0.7 + Math.random() * 0.3,   // High saturation
            0.5 + Math.random() * 0.5    // Variable lightness
          ),
          transparent: true,
          opacity: 0.6 + Math.random() * 0.4,
          wireframe: Math.random() > 0.7
        })
        
        const mesh = new THREE.Mesh(geometry, material)
        
        // Position nodes in 3D space
        mesh.position.set(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15
        )
        
        // Random rotation
        mesh.rotation.set(
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2
        )
        
        nodes.push(mesh)
        group.add(mesh)
      }
      
      // Connections between nearby nodes
      const connectionMaterial = new THREE.LineBasicMaterial({
        color: 0x4f46e5,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
      })
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = nodes[i].position.distanceTo(nodes[j].position)
          
          if (distance < 3) {
            const points = [nodes[i].position, nodes[j].position]
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
            const line = new THREE.Line(lineGeometry, connectionMaterial)
            group.add(line)
          }
        }
      }
      
      return { group, nodes }
    }

    // Create floating code elements
    const createFloatingCode = () => {
      const group = new THREE.Group()
      const codeElements = [
        '{ }', '< />', '[ ]', '( )', '==', '=>', '&&', '||', 
        'fn', 'if', 'AI', 'ML', 'DB', 'API'
      ]
      
      for (let i = 0; i < 30; i++) {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')!
        canvas.width = 128
        canvas.height = 64
        
        context.fillStyle = `hsl(${220 + Math.random() * 40}, 70%, ${50 + Math.random() * 30}%)`
        context.font = 'bold 20px monospace'
        context.textAlign = 'center'
        context.fillText(
          codeElements[Math.floor(Math.random() * codeElements.length)], 
          64, 35
        )
        
        const texture = new THREE.CanvasTexture(canvas)
        const material = new THREE.SpriteMaterial({ 
          map: texture, 
          transparent: true,
          opacity: 0.4,
          blending: THREE.AdditiveBlending
        })
        
        const sprite = new THREE.Sprite(material)
        sprite.scale.set(0.5, 0.25, 1)
        sprite.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        )
        
        group.add(sprite)
      }
      
      return group
    }

    // Create particle streams
    const createParticleStreams = () => {
      const group = new THREE.Group()
      
      for (let stream = 0; stream < 5; stream++) {
        const points = []
        const colors = []
        
        for (let i = 0; i < 100; i++) {
          const t = i / 100
          const radius = 2 + stream * 0.5
          
          points.push(
            Math.cos(t * Math.PI * 2 + stream * 1.2) * radius,
            Math.sin(t * Math.PI * 4 + stream * 0.8) * 2,
            Math.sin(t * Math.PI * 2 + stream * 1.5) * radius
          )
          
          const hue = (220 + stream * 10) / 360
          const color = new THREE.Color().setHSL(hue, 0.8, 0.5 + t * 0.3)
          colors.push(color.r, color.g, color.b)
        }
        
        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
        
        const material = new THREE.PointsMaterial({
          size: 0.02,
          vertexColors: true,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending
        })
        
        const particles = new THREE.Points(geometry, material)
        group.add(particles)
      }
      
      return group
    }

    // Create all effects
    const { group: networkGroup, nodes } = createGeometricNetwork()
    const codeGroup = createFloatingCode()
    const streamGroup = createParticleStreams()
    
    scene.add(networkGroup)
    scene.add(codeGroup)
    scene.add(streamGroup)
    
    camera.position.z = 8
    
    // Store refs
    sceneRef.current = scene
    rendererRef.current = renderer
    meshesRef.current = [networkGroup, codeGroup, streamGroup]

    // Animation loop
    let animationId: number
    let mouseX = 0
    let mouseY = 0
    let time = 0

    const animate = () => {
      animationId = requestAnimationFrame(animate)
      time += 0.01

      // Animate network nodes
      nodes.forEach((node, index) => {
        node.rotation.x += 0.01 + index * 0.001
        node.rotation.y += 0.008 + index * 0.0008
        node.rotation.z += 0.005 + index * 0.0005
        
        // Floating motion
        node.position.y += Math.sin(time + index) * 0.002
      })

      // Animate code elements
      codeGroup.children.forEach((sprite, index) => {
        sprite.rotation.z += 0.005
        sprite.position.y += Math.sin(time * 2 + index) * 0.001
        sprite.position.x += Math.cos(time + index) * 0.001
      })

      // Animate particle streams
      streamGroup.rotation.y += 0.003
      streamGroup.rotation.x += 0.001

      // Mouse interaction - subtle camera movement
      camera.position.x += (mouseX * 0.0001 - camera.position.x) * 0.05
      camera.position.y += (-mouseY * 0.0001 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - window.innerWidth / 2
      mouseY = event.clientY - window.innerHeight / 2
    }

    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      // Dispose of all geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose())
          } else {
            object.material.dispose()
          }
        }
        if (object instanceof THREE.Line) {
          object.geometry.dispose()
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose())
          } else {
            object.material.dispose()
          }
        }
        if (object instanceof THREE.Points) {
          object.geometry.dispose()
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose())
          } else {
            object.material.dispose()
          }
        }
      })
      
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}